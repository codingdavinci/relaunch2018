<?php

namespace Drupal\custom_filters\Controller;

use Drupal\Component\Utility\Tags;
use Drupal\Core\Controller\ControllerBase;
use Drupal\user\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Defines a route controller for entity auto-complete form elements.
 */
class AutoCompleteController extends ControllerBase {

  /**
   * Handler for auto-complete request.
   *
   * @param Request $request
   * @param string $field_name
   * @param string $count
   * @return JsonResponse
   */
  public function handleAutoComplete(Request $request, $field_name, $count) {
    $results = [];

    // Get the typed string from the URL, if it exists.
    if ($input = $request->query->get('q')) {
      $typedString = Tags::explode($input);
      $typedString = mb_strtolower(array_pop($typedString));

      $options = [];

      if ($field_name === 'institution') {
        $options = $this->getFilteredInstitutions($typedString);
      }

      $results = [];

      foreach ($options as $value => $label) {
        $results[] = [
          'value' => $label,
          'label' => $label,
        ];
        if (--$count === 0) {
          break;
        }
      }

    }

    return new JsonResponse($results);
  }

  /**
   * @param string $typedString
   * @return array
   */
  protected function getFilteredInstitutions($typedString) {
    $options = [];
    $institutionUserIds = \Drupal::entityQuery('user')
      ->condition('roles', 'institution')
      ->execute();
    $users = User::loadMultiple($institutionUserIds);

    /** @var User $user */
    foreach ($users as $user) {
      $institutionName = $user->get('field_institution_name')->value;
      $options[$institutionName] = $institutionName;
    }

    sort($options);

    return array_filter(
      array_unique($options),
      function($institutionName) use ($typedString) {
        return strpos(mb_strtolower($institutionName), $typedString) !== FALSE;
      }
    );
  }

}

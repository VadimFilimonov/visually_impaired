<?php

namespace Drupal\visually_impaired\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;



/**
 * Provides a 'SettingsBlock' Block.
 *
 * @Block(
 *   id = "visually_impaired",
 *   admin_label = @Translation("Visually impaired block"),
 *   category = @Translation("Visually_impaired"),
 * )
 */
class SettingsBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return array(
      'size_label' => 'Размер шрифта:',
      'color_label' => 'Цветовая схема:',
      'images_label' => 'Изображения:',
    );
  }

  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);
    $config = $this->getConfiguration();

    $form['size_label'] = array(
      '#type' => 'textfield',
      '#title' => t('Метка - размеры шрифтов'),
      '#default_value' => $config['size_label'],
    );

    $form['color_label'] = array(
      '#type' => 'textfield',
      '#title' => t('Метка - цветовая схема'),
      '#default_value' => $config['color_label'],
    );
    $form['images_label'] = array(
      '#type' => 'textfield',
      '#title' => t('Метка - изображения'),
      '#default_value' => $config['images_label'],
    );
    return $form;
  }
  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['size_label'] = $form_state->getValue('size_label');
    $this->configuration['color_label'] = $form_state->getValue('color_label');
    $this->configuration['images_label'] = $form_state->getValue('images_label');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    return array(
        '#title' => 'Visually_impaired',
        '#theme' => 'block--visually_impaired',
        '#size_label' => $this->configuration['size_label'],
        '#color_label' => $this->configuration['color_label'],
        '#images_label' => $this->configuration['images_label'],
    );
  }
}

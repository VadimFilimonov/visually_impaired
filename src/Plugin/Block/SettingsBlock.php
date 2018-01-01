<?php

namespace Drupal\visually_impaired\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;



/**
 * Provides a 'Hello' Block.
 *
 * @Block(
 *   id = "visually_impaired",
 *   admin_label = @Translation("Visually impaired block"),
 *   category = @Translation("Visually_impaired"),
 * )
 */
class SettingsBlock extends BlockBase {
  /**
   * Добавляем наши конфиги по умолчанию.
   *
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return array(
      'size_label' => 'Размер шрифта:',
      'color_label' => 'Цветовая схема:',
    );
  }

  public function blockForm($form, FormStateInterface $form_state) {
    // Получаем оригинальную форму для блока.
    $form = parent::blockForm($form, $form_state);
    // Получаем конфиги для данного блока.
    $config = $this->getConfiguration();

    // Добавляем поле для ввода сообщения.
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

    return $form;
  }
  /**
   * В субмите мы лишь сохраняем наши данные.
   *
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['size_label'] = $form_state->getValue('size_label');
    $this->configuration['color_label'] = $form_state->getValue('color_label');
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
    );
  }

}

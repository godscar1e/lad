<?php

function generate_html_files($source_dir, $output_dir)
{
    // Создать выходную директорию, если она не существует
    if (!is_dir($output_dir)) {
        mkdir($output_dir, 0777, true);
    }

    // Получить список всех файлов и директорий в исходной директории
    $files = scandir($source_dir);
    foreach ($files as $file) {
        if ($file != '.' && $file != '..') {
            $source_path = $source_dir . '/' . $file;
            $output_path = $output_dir . '/' . basename($file, '.php') . '.html';

            // Если это директория, рекурсивно обрабатывать её
            if (is_dir($source_path)) {
                generate_html_files($source_path, $output_dir . '/' . $file);
            } else if (pathinfo($source_path, PATHINFO_EXTENSION) == 'php') {
                // Выполнить PHP файл и сохранить результат в HTML файл
                ob_start();
                include $source_path;
                $html_content = ob_get_clean();
                file_put_contents($output_path, $html_content);
            }
        }
    }
}

// Указать исходную директорию с PHP файлами и выходную директорию для HTML файлов
$source_dir = '../php/';
$output_dir = '../html/';

// Запустить процесс генерации HTML файлов
generate_html_files($source_dir, $output_dir);

echo "HTML файлы успешно сгенерированы в директории: $output_dir\n";

<?php
$url = ["https://www.congress.gov/members?q={%22congress%22:%22115%22}&pageSize=250",
        "https://www.congress.gov/members?q=%7B%22congress%22%3A%22115%22%7D&pageSize=250&page=2",
        "https://www.congress.gov/members?q=%7B%22congress%22%3A%22115%22%7D&pageSize=250&page=3"];
$pages = array();
$array = array();



function crawl_page($url, $depth = 5, $array)
{
    static $seen = array();
    if (isset($seen[$url]) || $depth === 0) {
        return;
    }

    $seen[$url] = true;

    $dom = new DOMDocument('1.0');
    @$dom->loadHTMLFile($url);

    $anchors = $dom->getElementsByTagName('ol');
    // foreach ($anchors as $element) {
    //     $href = $element->getAttribute('href');
    //     if (0 !== strpos($href, 'http')) {
    //         $path = '/' . ltrim($href, '/');
    //         if (extension_loaded('http')) {
    //             $href = http_build_url($url, array('path' => $path));
    //         } else {
    //             $parts = parse_url($url);
    //             $href = $parts['scheme'] . '://';
    //             if (isset($parts['user']) && isset($parts['pass'])) {
    //                 $href .= $parts['user'] . ':' . $parts['pass'] . '@';
    //             }
    //             $href .= $parts['host'];
    //             if (isset($parts['port'])) {
    //                 $href .= ':' . $parts['port'];
    //             }
    //             $href .= dirname($parts['path'], 1).$path;
    //         }
    //     }
    //     crawl_page($href, $depth - 1);
    // }
    // echo "URL:",$url,PHP_EOL,"CONTENT:",PHP_EOL,$dom->saveHTML(),PHP_EOL,PHP_EOL;
    // echo $anchors[0]->nodeValue;
    $regex = "/MEMBER \d{1,3}/";
    $list = preg_split($regex, (string)$anchors[0]->nodeValue);
    echo $list[0];
    foreach ($list as $book) {
        // echo $book;
        break;
    }
    // echo count($anchors);
}
foreach($url as $page){
    crawl_page($page, 2, $array);
}
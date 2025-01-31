ReadMe for Documentation:

There is a clear folder structure for the documentation, so that references could work excatly.
Each new website must be inserted in a subfolder under the project folder. Every new website of an prefab should be inserted in a subfolder under the Prefabs folder. 

In the General Folder you can finds ExampleDocus, which must be used as templates for the individual documentation websites!

Every Website have an reference to the includes foolder content, where the style.css and the setupScript.js files should be referenced, in the following way

<link rel="stylesheet" href="../../includes/style.css"> </link> <!-- important for formatting -->
<script src="../includes/setupScript.js"></script> <!-- importent for formating -->

All image, video or other media content should be insert in the Media folder with path: includes\Media


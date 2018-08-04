# Apptivity JS
jQuery plugin and mini-framework for easy Single Page Applications for a Progressive Web App -  App Shell.

## Dependencies/Requirements
- jQuery
- Browser with HTML5 Support

## How to Use
Reference jQuery and the apptivity.js in the html file. It is recommended to place both at the head. jQuery must be referenced first before the apptivity js file.

```
<head>
    <script src="assets/js/jquery.min.js" type="text/js"></script>
    <script src="assets/js/apptivity.min.js" type="text/js"></script>
</head>
```

## Documentation

The app activity is a placeholder for a single activity. Here, you will define all of the things you need for the current activity including the app bar and modals.

The name property is used to identify that activity. Choose a straightforward and meaningful name.

```
<app-activity name="parent">
    <!-- Insert Content Here -->
</app-activity>
```

Since it is designed to be a jQuery plugin, all of the app control features are accessible via $.app().

The available options are as follows:
- `clear` - This clears all of the activities from the view
- `show-all` - This shows ALL of the activities to the view
- `set-style` - This will set the margin to 0px and width & height to 100%
- `set-position` - This will set the position to fixed

To show an activity you may send an object `{activity:'activity-name'}` You do not need to clear the view, it would automatically be cleared when opening an activity.

```
<app-activity name="parent">
    <h1>Parent</h1>
    <button id="openChildButton">Open Child</button>
</app-activity>

<app-activity name="child">
    <h1>Child</h1>
    <p>This is a child activity</p>
</app-activity>

<script>
$(document).ready(()=>{
    $.app("clear");
    $.app({activity:"parent"});
});

$("#openChildButton").click(()=>{
    // Do some preparation here

    // Show app activity
    $.app({
        activity:"child",
    });

});

</script>
```

To have a fade effect, add transition:"fade"

```
$.app({
    activity:"child",
    transition:"fade"
});
```
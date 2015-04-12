# ember-packery
This `ember-cli` addon imports the Packery library and allows you to quickly and easily build bin-packed grid views.

## Installation
`ember install:addon ember-packery`

That's it! The Packery library will automatically be imported in your app, and the `packery` component will be available to all of your templates.

## `packery`
The `packery` component accepts all of the options that `Packery` exposes. The naming is the same, and any option not specified will use the `Packery` default.

For example, if we wanted to a basic `Packery` view, we'd included the following in our template.

```
{{#packery}}
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
{{/packery}}
```

If we wanted to redefine the `item` class for `Packery`, we'd write the following:

```
{{#packery itemSelector=".piece"}}
  <div class="piece">Item 1</div>
  <div class="piece">Item 2</div>
  <div class="piece">Item 3</div>
{{/packery}}
```

For a full list of options that are exposed, please see the [Packery options](http://packery.metafizzy.co/options.html).

*A small caveat: while Ember allows us to pass most options to components as primitives, it doesn't handle `null` well. If you'd like to use `null` (as `containerStyle`, for example), you'll have to wrap it in quotes (`'null'`).*

### Adding and Removing Items from a Masonry Layout

We can specify an `items` attribute that `ember-packery` will observe. When the property changes, Packery will re-initalize itself and update its layout.

For example, if our controller exposes the enumerable property `colors`:

```
{{#packery items=colors}}
  {{#each colors}}
  <div class="item">
    Name: {{name}}
  </div>
  {{/each}}
{{/packery}}
```

Every time the length of the `colors` property is changed, Packery will account for it and generate a new layout.

## Contributing
If you find an issue or missing functionality, please don't hesistate to open a pull request.

### Installation
* `git clone` this repository
* `npm install`
* `bower install`

### Running
* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests
* `npm test`

### Building
* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

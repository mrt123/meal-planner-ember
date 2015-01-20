App.Food = DS.Model.extend({
    "name": DS.attr(),
    "amount": DS.attr(),
    "protein": DS.attr(),
    "complex": DS.attr(),
    "sugar": DS.attr(),
    "o3": DS.attr(),
    "o6": DS.attr(),
    "monoUnsaturated": DS.attr(),
    "saturated": DS.attr(),
    "calories": DS.attr(),
    "gi": DS.attr()
});

// attach fixtures to model's Class
App.Food.FIXTURES = [
    {
        "id": 1,
        "name": "oats",
        "amount": 100,
        "protein": 13.5,
        "complex": 58,
        "sugar": 0.7,
        "o3": 0.12,
        "o6": 2.8,
        "monoUnsaturated": 2.55,
        "saturated": 1.3,
        "calories": 355,
        "gi": 1
    },
    {
        "id": 2,
        "name": "bread rye",
        "amount": 100,
        "protein": 3.37,
        "complex": 17.01,
        "sugar": 1.4,
        "o3": 0.0233,
        "o6": 0.52,
        "monoUnsaturated": 0.635,
        "saturated": 0.321,
        "calories": 103,
        "gi": ""
    },
    {
        "id": 3,
        "name": "corn flakes",
        "amount": 100,
        "protein": 6.8,
        "complex": 75,
        "sugar": 8.5,
        "o3": 1.5,
        "o6": 1.5,
        "monoUnsaturated": 0.3,
        "saturated": 0.2,
        "calories": 375,
        "gi": ""
    },
    {
        "id": 4,
        "name": "Rooster Potatoes (cooked)",
        "amount": 100,
        "protein": 2.2,
        "complex": 16.6,
        "sugar": 0.5,
        "o3": 0.01,
        "o6": 0.06,
        "monoUnsaturated": 0,
        "saturated": 0,
        "calories": 79,
        "gi": ""
    },
    {
        "id": 5,
        "name": "Potatoes (boiled in skin)",
        "amount": 100,
        "protein": 2,
        "complex": 19,
        "sugar": 1,
        "o3": 0.01,
        "o6": 0.032,
        "monoUnsaturated": 0,
        "saturated": 0.24,
        "calories": 87,
        "gi": ""
    }
];
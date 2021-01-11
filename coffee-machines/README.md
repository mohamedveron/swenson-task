# Coffee machines and pod application
This app is developed using adonis js framework

## Setup

Node.js >= 8.0.0

npm >= 3.0.0

# Install adonis js

npm i -g @adonisjs/cli

Use the adonis command to run the app

```bash
adonis serve --dev
```

### Apis:

# 1- http://localhost:3333/coffeMachines

Method: post 

Body: {
    "product_type": "COFFEE_MACHINE_LARGE",
    "water_line_compatible": true
}

or: {
    "product_type": "COFFEE_MACHINE_LARGE"
}

or: {
    "water_line_compatible": true
}

you can use all the combinations of filters

# 2- http://localhost:3333/coffePods

Method: post 

Body: {
    "product_type": "COFFEE_POD_LARGE",
    "coffee_flavor": "COFFEE_FLAVOR_CARAMEL",
    "pack_size": "1 dozen"
}

or: {
    "product_type": "COFFEE_POD_LARGE",
    "pack_size": "1 dozen"
}

or: {
    "coffee_flavor": "COFFEE_FLAVOR_CARAMEL",
    "pack_size": "1 dozen"
}

or: {
    "product_type": "COFFEE_POD_LARGE",
    "coffee_flavor": "COFFEE_FLAVOR_CARAMEL"
}

you can use all the combinations of filters

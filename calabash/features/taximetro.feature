Feature: Taximetro

    Scenario: As a user I  want to remove splash screen
        #Se crea este esenario para que se ejecute solo una vez y no en cada ejemplo o escenario siguiente.
        Given I press "Paraderos"
        #button to remove the splash screen


    Scenario Outline: As a user I  want to know the cost of use a cab.
        Given I touch the "Inicio" text
        #to open te menu
        When I swipe left 
        And I press "Taximetro"
        And I enter <unidades> into input field number 1
        Then I should see <total>

        Examples:
        | unidades | total     |
        | "100"    | "$8,900"  |
        | "120"    | "$10,500" |
        | "65"     | "$6,000"  |  

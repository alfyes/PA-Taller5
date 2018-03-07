Feature: Search a route

    Scenario: As a user I  want to search a recent route
        Given I press "Paraderos"
        #button to remove the splash screen
        
        When I press "Viajar en Transmi, SITP o Taxi"
        
        And I press "Punto de origen"
        #remove the splash screen
        
        Then I should see "Trayectos recientes"
        
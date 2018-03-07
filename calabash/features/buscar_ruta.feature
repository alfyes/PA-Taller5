Feature: Search a route

    Scenario: As a user I  want to search a recent route
        Given I press "Paraderos"
        #button to remove the splash screen
        
        When I press "Viajar en Transmi, SITP o Taxi"
        
        And I press "Punto de origen"
        #remove the splash screen
        
        Then I should see "Trayectos recientes"


    Scenario: As a user I  want to search a route between two stations
        Given I press "Viajar en Transmi, SITP o Taxi"
        
        When I press "Tu ubicación"
        And I enter "can" into input field number 1
        And I touch the "Cll. 26 / Cra. 59" text
        And I press "Punto de destino"
        And I enter "centro memor" into input field number 1
        And I touch the "Centro Memoria" text
        And I press image button number 3
    
        Then I should see "Rutas sugeridas"
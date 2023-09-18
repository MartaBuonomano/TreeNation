Feature: Register and login

    Background: Given am I a not registered user on tree-nation homepage

    Scenario Outline: I can see the Join Tree-Nation pop up
        When I click on <button_type> button
        Then I verify a pop up to create an account is shown
        Examples:
            | button_type        |
            | Register           |
            | Create your forest |

    Scenario Outline: I can create an account
        When I am on the Join Tree-Nation pop up
        And I fill the fields with correct info for <user_type>
        Then I verify I can create an account
        And I verify I'm redirected to my private area
        Examples:
            | user_type |
            | citizen   |
            | company   |

    Background: Given am I an already registered user on tree-nation homepage

    Scenario Outline: I can see the Log in to Tree-Nation
        When I click on <button_type> button
        Then I verify a pop up to log into my account is shown
        Examples:
            | button_type                                  |
            | Login                                        |
            | Create your forest > Already a user? Log in! |

    Scenario Outline: I can log into my private area
        When I am on the Log in to Tree-Nation pop up
        And I fill the fields with correct info for <user_type>
        Then I verify I can log into my account
        And I verify I'm redirected to my private area
        Examples:
            | user_type |
            | citizen   |
            | company   |

    Background: Given am I an already logged user on tree-nation homepage

    Scenario: I can log out from my account
        When I click on the account icon
        And I click on the log out button
        Then I verify I'm properly logged out from my account

Feature: Password reset

    Background: Given am I an already existent user on tree-nation homepage, that doesnt' rememeber the password of its account

    Scenario: I can see the reset password pop up
        When I click on the login button
        And I click on the Forgot your password? button
        Then I verify a pop up to Reset password is shown is shown
        

    Scenario: I can recover my password
        When I add my email in the Reset password pop up
        And I click on the Reset password button
        Then I verify an email is sent to my account to recover my password
    
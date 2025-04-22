Feature: Specify number of events.
    Scenario: When user has not specified a number, 32 events are shown by default.
        Given the user is on the events page
        And the user hasn’t specified a number of events to display
        When the page loads
        Then the user should see 32 events displayed by default

    Scenario: User can change the number of events displayed.
        Given the user is on the events page
        When the user enters a number of events to display
        Then that number of events should be displayed
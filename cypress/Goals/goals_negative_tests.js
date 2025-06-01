// Метод надсилання негативного запиту на отримання усіх goals з invalid team id
export const GetGoalsWithInvalidTeamID = () => {
    return cy.sendRequest('team/123/goal', 'GET',)
}

// Метод надсилання негативного запиту на отримання усіх goals з invalid token
export const GetGoalsWithInvalidToken = () => {
    return     cy.request({
        url: `team/${Cypress.env('team_id')}/goal`,
        method: 'GET',
        headers: {
            'Authorization': '12312'
        },
        failOnStatusCode: false})
}

/////////////////////////////////////////////////////////////////////////////////////////////

// Метод надсилання негативного запиту на створення goal з invalid team id
export const CreatedGoalWithInvalidTeamID = () => {
    return cy.sendRequest('team/123/goal', 'POST',
        {"name": Cypress.env('goalName'),
        "description": Cypress.env('goalDescription')}, null, false)
}

// Метод надсилання негативного запиту на створення goal з invalid token
export const CreatedGoalWithInvalidToken = () => {
    return cy.request({
        url: `team/${Cypress.env('team_id')}/goal`,
        method: 'POST',
        headers: {
            'Authorization': '12312'
        },
        failOnStatusCode: false})
}

/////////////////////////////////////////////////////////////////////////////////////////////

// Метод надсилання негативного запиту на отримання створеного goal з invalid goal id
export const GetGoalWithInvalidGoalID = () => {
    return cy.sendRequest('goal/123', 'GET',null, null, false)
}
// Метод надсилання негативного запиту на отримання створеного goal з invalid token
export const GetGoalWithInvalidToken = () => {
    return     cy.request({
        url: `goal/${Cypress.env('goal_id')}`,
        method: 'GET',
        headers: {
            'Authorization': '12312'
        },
        failOnStatusCode: false})
}

/////////////////////////////////////////////////////////////////////////////////////////////

// Метод надсилання негативного запиту на оновлення goal з invalid goal id
export const UpdateGoalWithInvalidGoalID = () => {
    return cy.sendRequest('goal/123', 'PUT',
        {"name": 'Updated' + Cypress.env('goalName'),
        "description": 'Updated' + Cypress.env('goalDescription')}, null, false)
}

// Метод надсилання негативного запиту на оновлення goal з invalid token
export const UpdateGoalWithInvalidToken = () => {
    return cy.request({
        url: `goal/${Cypress.env('goal_id')}`,
        method: 'PUT',
        headers: {
            'Authorization': '12312'
        },
        body: {"name": 'Updated' + Cypress.env('goalName'),
            "description": 'Updated' + Cypress.env('goalDescription')},
        failOnStatusCode: false})
}

/////////////////////////////////////////////////////////////////////////////////////////////

// Метод надсилання негативного запиту на видалення goal з invalid goal id
export const DeleteGoalWithInvalidGoalID = () => {
    return cy.sendRequest('goal/123', 'DELETE',null, null, false)
}

// Метод надсилання негативного запиту на видалення goal з invalid token
export const DeleteGoalWithInvalidToken = () => {
    return cy.request({
        url: `goal/${Cypress.env('goal_id')}`,
        method: 'DELETE',
        headers: {
            'Authorization': '12312'
        },
        failOnStatusCode: false})
}

/////////////////////////////////////////////////////////////////////////////////////////////
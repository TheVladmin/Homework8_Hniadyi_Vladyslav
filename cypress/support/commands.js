// Оголошення змінних з goal ID
let goal_1_id
let goal_2_id
let goal_3_id

// Метод надсилання запиту (Загальний)
Cypress.Commands.add('sendRequest', (url, method, body = null ) => {
    cy.request({
        url: url,
        method: method,
        headers: {
            'Authorization': Cypress.env('token'),
            'Content-Type': 'application/json',
        },
        body: body,
        failOnStatusCode: false
    })
})

/////////////////////////////////////////////////////////////////////////////////////////////

// Метод надсилання запиту на створення першого goal
Cypress.Commands.add('CreateGoal1', () => {
    cy.sendRequest(`team/${Cypress.env('team_id')}/goal`, 'POST',
        {"name": Cypress.env('goalName'),
         "description": Cypress.env('goalDescription')}
    ).then((response) => {goal_1_id = response.body.goal.id})
})

/////////////////////////////////////////////////////////////////////////////////////////////

// Метод надсилання запиту на створення другого goal
Cypress.Commands.add('CreateGoal2', () => {
    cy.sendRequest(`team/${Cypress.env('team_id')}/goal`, 'POST',
        {"name": Cypress.env('goalName2'),
            "description": Cypress.env('goalDescription2')}
    ).then((response) => {goal_2_id = response.body.goal.id})
})

/////////////////////////////////////////////////////////////////////////////////////////////

// Метод надсилання запиту на створення goal
Cypress.Commands.add('CreateGoal3', () => {
    cy.sendRequest(`team/${Cypress.env('team_id')}/goal`, 'POST',
        {"name": Cypress.env('goalName3'),
            "description": Cypress.env('goalDescription3')}
    ).then((response) => {goal_3_id = response.body.goal.id})
})
/////////////////////////////////////////////////////////////////////////////////////////////

// Метод надсилання запиту на UPDATE goal
Cypress.Commands.add('UpdateGoal', () => {
    cy.sendRequest(`goal/${goal_3_id}`, 'PUT',
        {"name": 'Updated ' + Cypress.env('goalName3'),
         "description": 'Updated ' + Cypress.env('goalDescription3')}
    )
})

/////////////////////////////////////////////////////////////////////////////////////////////

// Метод надсилання запиту на отримання усіх goals
Cypress.Commands.add('GetAllGoals', () => {
    cy.sendRequest(`team/${Cypress.env('team_id')}/goal`, 'GET')
})

/////////////////////////////////////////////////////////////////////////////////////////////

// Метод надсилання запиту на отримання одного goal
Cypress.Commands.add('GetGoalByID', () => {
    cy.sendRequest(`goal/${goal_3_id}`, 'GET')
})

// Метод надсилання запиту на видалення одного goal
Cypress.Commands.add('DeleteGoal3', () => {
    cy.sendRequest(`goal/${goal_3_id}`, 'DELETE').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.sendRequest(`goal/${goal_3_id}`, 'GET').then((res) => {
        expect(res.status).to.eq(404);
    })
})
/////////////////////////////////////////////////////////////////////////////////////////////

// Метод надсилання запиту на видалення одного або двох goals
Cypress.Commands.add('DeleteGoals', (goals_amount = null) => {
    if (goals_amount >= 1) {
        cy.then(() => {
            cy.sendRequest(`goal/${goal_1_id}`, 'DELETE').then((response) => {
                expect(response.status).to.eq(200);
            })
            cy.sendRequest(`goal/${goal_1_id}`, 'GET').then((res) => {
                expect(res.status).to.eq(404);
            })
        })
    }
    if (goals_amount === 2) {
        cy.then(() => {
            cy.sendRequest(`goal/${goal_2_id}`, 'DELETE').then((response) => {
                expect(response.status).to.eq(200);
            })
            cy.sendRequest(`goal/${goal_2_id}`, 'GET').then((res) => {
                expect(res.status).to.eq(404);
            })
        })
    }
})

/////////////////////////////////////////////////////////////////////////////////////////////



import {
    CreatedGoalWithInvalidTeamID,
    CreatedGoalWithInvalidToken,
    DeleteGoalWithInvalidGoalID,
    DeleteGoalWithInvalidToken,
    GetGoalsWithInvalidTeamID,
    GetGoalsWithInvalidToken,
    GetGoalWithInvalidGoalID,
    GetGoalWithInvalidToken,
    UpdateGoalWithInvalidGoalID,
    UpdateGoalWithInvalidToken} from "../../Goals/goals_negative_tests";


describe('GET Goals Tests', () => {

// Get Goals / Positive Tests
    it('GET goals / Positive tests', () => {

        //Створюємо перший goal//
        cy.CreateGoal1()
            .then((goal1Res) => {
                expect(goal1Res.status).to.eq(200)
                expect(goal1Res.body.goal.name).to.be.eql(Cypress.env('goalName'))
                expect(goal1Res.body.goal.description).to.be.eql(Cypress.env('goalDescription'))

            })
        //Створюємо другий goal//
        cy.CreateGoal2()
            .then((goal2Res) => {
                expect(goal2Res.status).to.eq(200)
                expect(goal2Res.body.goal.name).to.be.eql(Cypress.env('goalName2'))
                expect(goal2Res.body.goal.description).to.be.eql(Cypress.env('goalDescription2'))

            })
        //Отримуємо усі goals//
        cy.GetAllGoals()
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.goals[0].name).to.be.eql(Cypress.env('goalName'))
                expect(response.body.goals[0].description).to.be.eql(Cypress.env('goalDescription'))
                expect(response.body.goals[1].name).to.be.eql(Cypress.env('goalName2'))
                expect(response.body.goals[1].description).to.be.eql(Cypress.env('goalDescription2'))
            })

        //Видаляємо обидва goals//
        cy.DeleteGoals(2)


    })

///////////////////////////////////////////////////////////////////

// Get Goals / Negative Tests
    it('GET goals / Negative tests', () => {

        //Створюємо перший goal//
        cy.CreateGoal1()
            .then((goal1Res) => {
                expect(goal1Res.status).to.eq(200)
                expect(goal1Res.body.goal.name).to.be.eql(Cypress.env('goalName'))
                expect(goal1Res.body.goal.description).to.be.eql(Cypress.env('goalDescription'))
            })

        //Створюємо другий goal//
        cy.CreateGoal2()
            .then((goal2Res) => {
                expect(goal2Res.status).to.eq(200)
                expect(goal2Res.body.goal.name).to.be.eql(Cypress.env('goalName2'))
                expect(goal2Res.body.goal.description).to.be.eql(Cypress.env('goalDescription2'))
            })

        //Отримуємо усі goals з invalid team id
        GetGoalsWithInvalidTeamID()
            .then((response) => {
                expect(response.status).to.eq(401)
                expect(response.body.err).to.be.eql("Team not authorized")
                expect(response.body.ECODE).to.be.eql("OAUTH_060")
            })

        //Отримуємо усі goals з invalid token
        GetGoalsWithInvalidToken()
            .then((response) => {
                expect(response.status).to.eq(401)
                expect(response.body.err).to.be.eql("Oauth token not found")
                expect(response.body.ECODE).to.be.eql("OAUTH_019")
            })

        //Видаляємо обидва goals
        //Тут я не зрозумів як додати перевірку сюди на 2 запити тому вона буде в commands.js
        cy.DeleteGoals(2)
    })

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Create Goals / Positive Tests
    it('Create goal / Positive tests', () => {

        //Створюємо goal//
        cy.CreateGoal3()
            .then((goal3Res) => {
                expect(goal3Res.status).to.eq(200)
                expect(goal3Res.body.goal.name).to.be.eql(Cypress.env('goalName3'))
                expect(goal3Res.body.goal.description).to.be.eql(Cypress.env('goalDescription3'))
            })

        //Отримуємо створений goal//
        cy.GetGoalByID()
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.goal.name).to.be.eql(Cypress.env('goalName3'))
                expect(response.body.goal.description).to.be.eql(Cypress.env('goalDescription3'))
            })

        //Видаляємо створений goal//
        cy.DeleteGoal3()

    })

///////////////////////////////////////////////////////////////////

// Create Goals / Negative Tests
    it('Create goal / Negative tests', () => {

        //Створюємо goal//
        cy.CreateGoal3()
            .then((goal3Res) => {
                expect(goal3Res.status).to.eq(200)
                expect(goal3Res.body.goal.name).to.be.eql(Cypress.env('goalName3'))
                expect(goal3Res.body.goal.description).to.be.eql(Cypress.env('goalDescription3'))
            })

        //Створення goal з invalid team_id
        CreatedGoalWithInvalidTeamID()
            .then((response) => {
                expect(response.status).to.eq(401)
                expect(response.body.err).to.be.eql("Team not authorized")
                expect(response.body.ECODE).to.be.eql("OAUTH_061")
            })

        //Створення goal з invalid token
        CreatedGoalWithInvalidToken()
            .then((response) => {
                expect(response.status).to.eq(401)
                expect(response.body.err).to.be.eql("Oauth token not found")
                expect(response.body.ECODE).to.be.eql("OAUTH_019")
            })

        //Видаляємо goal
        cy.DeleteGoal3()
    })

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Get Goal / Positive Tests
    it('GET goal / Positive tests', () => {

        //Створюємо goal//
        cy.CreateGoal3()
            .then((goal3Res) => {
                expect(goal3Res.status).to.eq(200)
                expect(goal3Res.body.goal.name).to.be.eql(Cypress.env('goalName3'))
                expect(goal3Res.body.goal.description).to.be.eql(Cypress.env('goalDescription3'))
            })

        //Отримуємо goal//
        cy.GetGoalByID()
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.goal.name).to.be.eql(Cypress.env('goalName3'))
                expect(response.body.goal.description).to.be.eql(Cypress.env('goalDescription3'))
            })

        //Видаляємо goal//
        cy.DeleteGoal3()

    })

///////////////////////////////////////////////////////////////////

// Get Goal / Negative Tests
    it('GET goal / Negative tests', () => {

        //Створюємо goal//
        cy.CreateGoal3()
            .then((goal3Res) => {
                expect(goal3Res.status).to.eq(200)
                expect(goal3Res.body.goal.name).to.be.eql(Cypress.env('goalName3'))
                expect(goal3Res.body.goal.description).to.be.eql(Cypress.env('goalDescription3'))
            })

        //Отримуємо goal з invalid goal_id
        GetGoalWithInvalidGoalID()
            .then((response) => {
                expect(response.status).to.eq(500)
                expect(response.body.err).to.be.eql("Internal Server Error")
                expect(response.body.ECODE).to.be.eql("22P02")
            })

        //Створення goal з invalid token
        GetGoalWithInvalidToken()
            .then((response) => {
                expect(response.status).to.eq(401)
                expect(response.body.err).to.be.eql("Oauth token not found")
                expect(response.body.ECODE).to.be.eql("OAUTH_019")
            })

        //Видаляємо goal
        cy.DeleteGoal3()
    })


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Update Goal / Positive Tests
    it('Update goal / Positive tests', () => {

        //Створюємо goal//
        cy.CreateGoal3()
            .then((goal3Res) => {
                expect(goal3Res.status).to.eq(200)
                expect(goal3Res.body.goal.name).to.be.eql(Cypress.env('goalName3'))
                expect(goal3Res.body.goal.description).to.be.eql(Cypress.env('goalDescription3'))
            })

        //Оновлюємо goal//
        cy.UpdateGoal()
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.goal.name).to.be.eql('Updated ' + Cypress.env('goalName3'))
                expect(response.body.goal.description).to.be.eql('Updated ' + Cypress.env('goalDescription3'))
            })

        //Отримуємо оновлений goal//
        cy.GetGoalByID()
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.goal.name).to.be.eql('Updated ' + Cypress.env('goalName3'))
                expect(response.body.goal.description).to.be.eql('Updated ' + Cypress.env('goalDescription3'))
            })

        //Видаляємо goal//
        cy.DeleteGoal3()

    })

///////////////////////////////////////////////////////////////////

// Update Goal / Negative Tests
    it('Update goal / Negative tests', () => {

        //Створюємо goal//
        cy.CreateGoal3()
            .then((goal3Res) => {
                expect(goal3Res.status).to.eq(200)
                expect(goal3Res.body.goal.name).to.be.eql(Cypress.env('goalName3'))
                expect(goal3Res.body.goal.description).to.be.eql(Cypress.env('goalDescription3'))
            })

        //Отримуємо goal з invalid goal_id
        UpdateGoalWithInvalidGoalID()
            .then((response) => {
                expect(response.status).to.eq(500)
                expect(response.body.err).to.be.eql("Internal Server Error")
                expect(response.body.ECODE).to.be.eql("22P02")
            })

        //Створення goal з invalid token
        UpdateGoalWithInvalidToken()
            .then((response) => {
                expect(response.status).to.eq(401)
                expect(response.body.err).to.be.eql("Oauth token not found")
                expect(response.body.ECODE).to.be.eql("OAUTH_019")
            })

        //Видаляємо goal
        cy.DeleteGoal3()
    })

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Delete Goal / Positive Tests
    it('Delete goal / Positive tests', () => {

        //Створюємо goal//
        cy.CreateGoal3()
            .then((goal3Res) => {
                expect(goal3Res.status).to.eq(200)
                expect(goal3Res.body.goal.name).to.be.eql(Cypress.env('goalName3'))
                expect(goal3Res.body.goal.description).to.be.eql(Cypress.env('goalDescription3'))
            })

        //Отримуємо створений goal//
        cy.GetGoalByID()
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.goal.name).to.be.eql(Cypress.env('goalName3'))
                expect(response.body.goal.description).to.be.eql(Cypress.env('goalDescription3'))
            })

        //Видаляємо goal//
        cy.DeleteGoal3()

    })

// ///////////////////////////////////////////////////////////////////

// Delete Goal / Negative Tests
    it('Delete goal / Negative tests', () => {

        //Створюємо goal//
        cy.CreateGoal3()
            .then((goal3Res) => {
                expect(goal3Res.status).to.eq(200)
                expect(goal3Res.body.goal.name).to.be.eql(Cypress.env('goalName3'))
                expect(goal3Res.body.goal.description).to.be.eql(Cypress.env('goalDescription3'))
            })

        //Отримуємо goal з invalid goal_id
        DeleteGoalWithInvalidGoalID()
            .then((response) => {
                expect(response.status).to.eq(500)
                expect(response.body.err).to.be.eql("Internal Server Error")
                expect(response.body.ECODE).to.be.eql("22P02")
            })

        //Створення goal з invalid token
        DeleteGoalWithInvalidToken()
            .then((response) => {
                expect(response.status).to.eq(401)
                expect(response.body.err).to.be.eql("Oauth token not found")
                expect(response.body.ECODE).to.be.eql("OAUTH_019")
            })

        //Видаляємо goal
        cy.DeleteGoal3()
    })

})

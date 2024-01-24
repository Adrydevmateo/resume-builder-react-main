# e2e Testing Rules

`Each page must have an end to end test`
```TypeScript
describe('Home-Page.tsx', () => {
    it('should visit', () => {
        cy.visit('/')
        const title = cy.get('h1')
        expect(title).to.equal('Home Page')
    })
})
```
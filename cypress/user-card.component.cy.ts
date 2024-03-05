import { User } from '../src/app/user-int';
import { UserCardComponent } from './../src/app/components/user-card/user-card.component';
describe('user-card', () => {
  beforeEach(() => {
    const mockUser: User = {
      id: 7,
      name: 'Kacper',
      surname: 'Win',
      department: 'soft',
      email: 'kacp@example.com',
      salary: 300000,
      startDate: new Date('13/09/2023'),
      liveUser: true
      }
      const template = `<app-user-card [user]="user"></app-user-card>`
      cy.mount(template, {imports: [UserCardComponent], componentProperties: {user: mockUser}})
      cy.viewport('macbook-16')
  })
  it('should display email property', () => {
    cy.get('[data-cy="email-value"]').should('contain.text', 'Email: kacp@example.com')
  }),
  it('should display name', () => {
    cy.get('[data-cy="name-value"]').should('contain.text', 'Name: Kacper')
  })
})
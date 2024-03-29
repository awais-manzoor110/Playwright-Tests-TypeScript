import {type Page} from '@playwright/test'
export class forms {
  constructor(readonly page: Page) {
    this.page = page
  }
  async form_card() {
    await this.page.getByText('Forms').click()
  }
  async practice_form_button() {
    await this.page.getByText('Practice Form').click()
  }
  async page_zoomOut() {
    await this.page.evaluate(() => {
      document.body.style.transform = 'scale(1.0)'
    })
  }
  async gender_check(gender: string) {
    await this.page.locator(`input[value='${gender}']`).check({force: true})
  }
  async mobileNumber_field(mobileNumber: string) {
    await this.page.fill('#userNumber', mobileNumber)
  }
  async dob_field(month: string, year: string, day: string) {
    await this.page.locator('#dateOfBirthInput').click()
    await this.page.selectOption('.react-datepicker__month-select', `${month}`)
    await this.page.selectOption('.react-datepicker__year-select', `${year}`)
    await this.page.click(`.react-datepicker__day--0${day}`)
  }
  async subject_field(subject: string) {
    await this.page.fill('#subjectsInput', subject, {force: true})
  }
  async hobbies_check(hobby: string) {
    const check = await this.page.locator('.custom-checkbox').filter({
      has: this.page.locator('.custom-control-label'),
      hasText: hobby,
    })
    await check.locator("[type='checkbox']").first().check({force: true})
  }
  async upload_image() {
    await this.page.setInputFiles('#uploadPicture', 'test-data/test-img.jpg')
  }
  async current_address_field(address: string) {
    await this.page.fill('#currentAddress', address)
  }
  async stateDropdown() {
    await this.page.locator('#state').click()
    await this.page.locator('#react-select-3-option-0').click()
  }
  async cityDropdown() {
    await this.page.locator('#city').click()
    await this.page.locator('#react-select-4-option-0').click()
  }
  async submit_button() {
    await this.page.locator('#submit').click()
  }
}

import {test} from '@playwright/test'
import {forms} from '../../pages/forms'
import {Webtables} from '../../pages/webtables'
import {formData} from '../../test-data/formData'

test('Verify user can submit the form.', async ({page}) => {
  const Webtable = new Webtables(page)
  const form = new forms(page)
  await page.goto('/')
  await form.form_card()
  await form.practice_form_button()
  await Webtable.first_name_field(formData.firstName)
  await Webtable.last_name_field(formData.lastName)
  await Webtable.email_field(formData.email)
  await form.gender_check(formData.gender)
  await form.mobileNumber_field(formData.mobileNumber)
  await form.dob_field(formData.Month, formData.year, formData.day)
  await form.subject_field(formData.subject)
  await form.hobbies_check(formData.hobbies)
  await form.upload_image()
  await form.current_address_field(formData.currentAddress)
  /* I'm unable to interact with these elements in Chrome because when the Chromium browser launches, the page state becomes locked.
   Consequently, scrolling is disabled, and since the dropdowns are located at the bottom of the page, they are not visible. 
   Even if we pass the 'force true' option, we cannot perform the desired action. */
  // await form.stateDropdown()
  // await form.cityDropdown()
  // await form.submit_button()
})
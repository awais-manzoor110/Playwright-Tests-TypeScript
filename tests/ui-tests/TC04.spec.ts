import test from '../../fixtures/basePages'

test('Verify the progress bar', async ({probar, page}) => {
  // const probar = new progressBar(page)
  await page.goto('/')
  await probar.widget_card()
  await probar.progressBar_option()
  await probar.beforeStart_assertion()
  await probar.start_button()
  await probar.final_assertion()
})

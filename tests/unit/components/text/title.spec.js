import { shallowMount } from '@vue/test-utils'
import Title from '@/components/text/Title/index.vue'

describe('Component => Title', () => {
  it('renders main title', () => {
    const title = 'Hello World'
    const wrapper = shallowMount(Title, {
      propsData: { title },
    })
    expect(wrapper.text()).toMatch(title)
  })

  it('renders sub text', () => {
    const title = 'Hello World'
    const subText = 'It`s time to code.'
    const wrapper = shallowMount(Title, {
      propsData: { title, subText },
    })
    expect(wrapper.text()).toMatch(subText)
  })
})

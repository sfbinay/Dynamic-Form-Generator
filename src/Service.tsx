import axios from 'axios'

const service = axios.create({
    baseURL: "https://www.jsonbulut.com/json"
})

const ref = "2490c8c443178a9a4d10b6a2cd541e19"

export function getForm() {
    const params = {
        ref: ref,
        formId:"56" /* hazir formlar = formId:"39" formId:"44" formId:"56" */
    }

    return service.get("/forms.php", { params: params })
}

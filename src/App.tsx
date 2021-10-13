import React, { useEffect, useState } from 'react'
import { Bilgiler, IForm } from './IForm'
import { FormComponent } from './FormComponent'
import { getForm } from './Service'

export default function App() {

  const [formData, setFormData] = useState<Bilgiler>()
  const [inputs, setInputs] = useState<any[]>([])

  useEffect(() => {

    getForm().then(res => {
      const resForm: IForm = res.data
      setFormData(resForm.forms[0].bilgiler)
    })
  }, [])

  return (
    <div>
      {/* FormComponent, recursive component seklinde olusturulmustur, children durumuna gore kendini icinde tekrar olusturuyor.
          kaynak = " https://dev.to/knowit-development/recursive-components-in-react-37ka " */}
      
      <FormComponent {...formData?.formjson.children[0].children[0]} setInputs={setInputs} inputs={inputs} />

      {/* formjson altinda 1. children altinda <html></html> 2.sinin altında <body></body> tag'i oldugu icin 2.children'dan itibaren basliyor */} 

    </div>
  )
}

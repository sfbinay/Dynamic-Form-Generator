import React, { createElement, FormEvent, useEffect, useState } from "react"

export const FormComponent = ({ inputs, setInputs, tag, children, html, type, placeholder, value, id, name, index }: any,) => {

    const hasChildren = children && children.length

    const [formState, setFormState] = useState<any>("")

    function formSubmit(e: FormEvent) {
        e.preventDefault()
        console.log('inputs :>> ', inputs);
    }

    function formChange(e: any) {
        setFormState(e.target.value)
    }

    if (tag === "input" || tag === "select" || tag === "textarea") {
        if (inputs.lenght === 0) {
            var arrIndex: number = 0
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-redeclare
            var arrIndex: number = inputs.length
            for (const idx in inputs) {
                if (inputs[idx].name === name) {
                    // eslint-disable-next-line @typescript-eslint/no-redeclare
                    var arrIndex: number = parseInt(idx)
                }
            }
        }
    }

    if (tag === "textarea") {
        html = null
    }

    useEffect(() => {
        if ((tag === "input" || tag === "select" || tag === "textarea") && (formState !== "" || inputs.length !== 0)) {
            const data = {
                name: name,
                formState
            }
            const arr = Object.assign([], inputs)
            arr[arrIndex] = data
            setInputs(arr)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formState])

    return (
        <>
            {tag === "label" && hasChildren ? html : null}

            {tag !== undefined ?
                createElement(
                    tag,

                    tag === "form" ?
                        { type: type, placeholder: placeholder, value: value, id: id, name: name, onSubmit: (e) => formSubmit(e) }
                        : tag === "input" || tag === "select" || tag === "textarea" ?
                            { type: type, placeholder: placeholder, value: value, id: id, name: name, onChange: (e) => formChange(e) }
                            : { type: type, placeholder: placeholder, value: value, id: id, name: name },

                    hasChildren ?
                        children.map((item: any, index: any) => (
                            <FormComponent key={index} {...item} setInputs={setInputs} inputs={inputs} /> /* recursion */
                        ))
                        : html
                )
                : null
            }
        </>
    )
}
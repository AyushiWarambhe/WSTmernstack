{/*import React, { use, useState } from 'react'
import "./styles/style.scss"
const AddLanuage = (props) => {

    let [formData, setFormData] = useState({
        title: "", scope: [], difficulties: "", duration: ""
    })

    let [checkUniqueTitle, setCheckUniqueTitle] = useState(false)
   
    const handleSumbit = (event) => {
        event.preventDefault()
        console.log(formData)
        props.dataSetLanguagesHandler((prev) => {
            return [formData, ...prev]
        })

        setFormData({ title: "", scope: [], difficulties: "", duration: "" })

    }

    const handleChange = (e) => {
        let { name, value } = e.target

        if (name == "scope") {
            value = value.split(",")
            value = value.map((item) => { return item.trim() })
        }

        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const checkTitle = (e) => {
        try {
            let { value } = e.target
            let result = props.dataSetLanguages.filter((language) => {
                return value.toLowerCase() == language.title.toLowerCase()
            })

            if (result.length != 0) throw ("duplicate entry !")

            setCheckUniqueTitle(true)

        } catch (err) {
            console.log("checktitle error : ", err)
            setCheckUniqueTitle(false)
        }


    }


 
    return (
        <div className='add-language-form'>
            <h1 className='my-10 text-center font-bold'>Add Language !</h1>
            <form onSubmit={handleSumbit} className='flex flex-col items-center gap-4 p-3'>

                <input className='p-2 border border-x-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition' onChange={
                    (event) => {
                        handleChange(event)
                        checkTitle(event)
                       
                    }} type="text" name='title' placeholder='title' value={formData.title} />

                {
                    !checkUniqueTitle ? <h1 className='font-bold
                     p-2 bg-red-400 text-white'>Title has to be unique !</h1> : null
                }

                <input className='p-2 border border-x-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition' onChange={handleChange} type="text" name='duration' placeholder='duration' value={formData.duration} />

                <input className='p-2 border border-x-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition' onChange={handleChange} type="text" name='scope' placeholder='scope' value={formData.scope} />

                <input className='p-2 border border-x-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition' onChange={handleChange} type="text" name='difficulties' placeholder='difficulties' value={formData.difficulties} />

                <button className={`bg-green-500 font-bold text-white hover:bg-green-700 px-5 py-2 transition-all ${!checkUniqueTitle ? "!bg-gray-400" : null } `} disabled={!checkUniqueTitle}>Add Language !</button>
            </form>
        </div>
    )
}

export default AddLanuage*/}

import React, { useState } from 'react'
import "./styles/style.scss"

const AddLanguage = (props) => {

    const [formData, setFormData] = useState({
        title: "", scope: [], difficulties: "", duration: ""
    })

    // Track duplicates and field completeness
    const [checkUniqueTitle, setCheckUniqueTitle] = useState(false)
    const [checkUniqueScope, setCheckUniqueScope] = useState(false)
    const [checkUniqueDifficulty, setCheckUniqueDifficulty] = useState(false)
    const [checkUniqueDuration, setCheckUniqueDuration] = useState(false)

    //  Common handler for input fields
    const handleChange = (e) => {
        let { name, value } = e.target

        if (name === "scope") {
            value = value.split(",").map((item) => item.trim())
        }

        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Check for duplicate title
    const checkTitle = (e) => {
        try {
            let { value } = e.target
            let result = props.dataSetLanguages.filter((language) =>
                value.toLowerCase() === language.title.toLowerCase()
            )
            if (result.length !== 0) throw "duplicate title found!"
            setCheckUniqueTitle(true)
        } catch (err) {
            console.log("checkTitle error:", err)
            setCheckUniqueTitle(false)
        }
    }

    //  Check for duplicate scope
    const checkScope = (e) => {
        try {
            let { value } = e.target
            let inputScopes = value.split(",").map((s) => s.trim().toLowerCase())
            let allScopes = props.dataSetLanguages.flatMap((lang) =>
                lang.scope.map((s) => s.toLowerCase())
            )
            let duplicate = inputScopes.some((s) => allScopes.includes(s))
            if (duplicate) throw "duplicate scope found!"
            setCheckUniqueScope(true)
        } catch (err) {
            console.log("checkScope error:", err)
            setCheckUniqueScope(false)
        }
    }

    // Check for duplicate difficulty
    const checkDifficulties = (e) => {
        try {
            let { value } = e.target
            let result = props.dataSetLanguages.filter((language) =>
                value.toLowerCase() === language.difficulties.toLowerCase()
            )
            if (result.length !== 0) throw "duplicate difficulty found!"
            setCheckUniqueDifficulty(true)
        } catch (err) {
            console.log("checkDifficulties error:", err)
            setCheckUniqueDifficulty(false)
        }
    }

    //  Check for duplicate duration
    const checkDuration = (e) => {
        try {
            let { value } = e.target
            let result = props.dataSetLanguages.filter((language) =>
                value.toLowerCase() === language.duration.toLowerCase()
            )
            if (result.length !== 0) throw "duplicate duration found!"
            setCheckUniqueDuration(true)
        } catch (err) {
            console.log("checkDuration error:", err)
            setCheckUniqueDuration(false)
        }
    }

    // Check if all fields are filled
    const allFieldsFilled = formData.title.trim() !== "" && formData.scope.length > 0 &&
        formData.difficulties.trim() !== "" && formData.duration.trim() !== ""

    //Check if everything is valid and filled
    const canSubmit = allFieldsFilled && checkUniqueTitle && checkUniqueScope &&
     checkUniqueDifficulty && checkUniqueDuration

    // Handle form submit
    const handleSubmit = (event) => {
        event.preventDefault()

        if (!canSubmit) {
            alert("Please fill all fields correctly before submitting.")
            return
        }

        props.dataSetLanguagesHandler((prev) => [formData, ...prev])

        // Reset form
        setFormData({ title: "", scope: [], difficulties: "", duration: "" })
        setCheckUniqueTitle(false)
        setCheckUniqueScope(false)
        setCheckUniqueDifficulty(false)
        setCheckUniqueDuration(false)
    }

    return (
        <div className='add-language-form'>
            <h1 className='my-10 text-center font-bold text-2xl'>Add Language</h1>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 p-3'>

                {/* TITLE */}
                <input
                    className='p-2 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition w-80'
                    onChange={(event) => {
                        handleChange(event)
                        checkTitle(event)
                    }}
                    type="text"
                    name='title'
                    placeholder='Title'
                    value={formData.title}
                />
                {!checkUniqueTitle && formData.title && (
                    <p className='text-red-500 font-semibold'>Title must be unique!</p>
                )}

                {/* SCOPE */}
                <input
                    className='p-2 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition w-80'
                    onChange={(event) => {
                        handleChange(event)
                        checkScope(event)
                    }}
                    type="text"
                    name='scope'
                    placeholder='Scope (comma separated)'
                    value={formData.scope}
                />
                {!checkUniqueScope && formData.scope.length > 0 && (
                    <p className='text-red-500 font-semibold'>Scope already exists!</p>
                )}

                {/* DIFFICULTIES */}
                <input
                    className='p-2 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition w-80'
                    onChange={(event) => {
                        handleChange(event)
                        checkDifficulties(event)
                    }}
                    type="text"
                    name='difficulties'
                    placeholder='Difficulties'
                    value={formData.difficulties}
                />
                {!checkUniqueDifficulty && formData.difficulties && (
                    <p className='text-red-500 font-semibold'>Difficulty already exists!</p>
                )}

                {/* DURATION */}
                <input
                    className='p-2 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition w-80'
                    onChange={(event) => {
                        handleChange(event)
                        checkDuration(event)
                    }}
                    type="text"
                    name='duration'
                    placeholder='Duration'
                    value={formData.duration}
                />
                {!checkUniqueDuration && formData.duration && (
                    <p className='text-red-500 font-semibold'>Duration already exists!</p>
                )}

                {/* BUTTON */}
                <button
                    className={`bg-green-500 font-bold text-white hover:bg-green-700 px-5 py-2 rounded-lg transition-all ${!canSubmit ? "!bg-gray-400 cursor-not-allowed" : ""}`}
                    disabled={!canSubmit}
                >
                    Add Language
                </button>
            </form>
        </div>
    )
} 



export default AddLanguage

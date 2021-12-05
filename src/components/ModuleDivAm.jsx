import {useState} from 'react' 
import AdviceButton from "./Buttons/AdviceButton"
import DeleteButton from "./Buttons/DeleteButton"
import SubmitButton from "./Buttons/SubmitButton"
import CreateButton from "./Buttons/CreateButton"
const mockedData = require("../files/mockedData.json")

function ModuleDivAm(selected) {
    const [moduleOne, setModuleOne] = useState(false)
    const [moduleTwo, setModuleTwo] = useState(false)
    const [moduleThree, setModuleThree] = useState(false)
    const [moduleFour, setModuleFour] = useState(false)
    if(selected.selected === "Module 1")setModuleOne(true)
    if(selected.selected === "Module 2")setModuleTwo(true)
    if(selected.selected === "Module 3")setModuleThree(true)
    if(selected.selected === "Module 4")setModuleFour(true)
    
    return (
        <div>
            <div>
            <h1>{`Numbers of users in ${selected.selected}:`}</h1>
            </div>
            <div className="usersDiv">
                {
                        moduleOne?
                    mockedData.map(e =>
                        e.auth_module.authn_provider_1.map(e =><div className="users">{e}</div>)
                        ) :
                        moduleTwo?
                        mockedData.map(e =>
                            e.auth_module.authn_provider_2.map(e =><div className="users">{e}</div>)
                            ) :
                            moduleThree?
                            mockedData.map(e =>
                                e.auth_module.authn_provider_3.map(e =><div className="users">{e}</div>)
                                ) :
                                moduleFour?
                                mockedData.map(e =>
                                    e.auth_module.authn_provider_4.map(e =><div className="users">{e}</div>)
                                    ) : null
                    }
            </div>
            <div className="buttonDiv">
                <DeleteButton/>
                <AdviceButton/>
                <CreateButton/>
                <SubmitButton/>
            </div>
        </div>
    )
}

export default ModuleDivAm

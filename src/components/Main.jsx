import AdviceButton from "./Buttons/AdviceButton"
import DeleteButton from "./Buttons/DeleteButton"
import SubmitButton from "./Buttons/SubmitButton"
import CreateButton from "./Buttons/CreateButton"
import {useState} from 'react' 
import mockedData from "../files/mockedData.json"

function Main() {
    const [selected, setSelected] = useState("")
    const [contentM, setContentM] = useState(true)
    const [moduleOne, setModuleOne] = useState(false)
    const [moduleTwo, setModuleTwo] = useState(false)
    const [moduleThree, setModuleThree] = useState(false)
    const [moduleFour, setModuleFour] = useState(false)


    const handleClick1 = () => {
        setModuleOne(true);
        setModuleTwo(false);
        setModuleThree(false);
        setModuleFour(false);
        setSelected("Module 1");
    }

    const handleClick2 = () => {
        setModuleOne(false);
        setModuleTwo(true);
        setModuleThree(false);
        setModuleFour(false);
        setSelected("Module 2");
    }

    const handleClick3 = () => {
        setModuleOne(false);
        setModuleTwo(false);
        setModuleThree(true);
        setModuleFour(false);
        setSelected("Module 3");
    }

    const handleClick4 = () => {
        setModuleOne(false);
        setModuleTwo(false);
        setModuleThree(false);
        setModuleFour(true);
        setSelected("Module 4");
    }
    return (
        <div className="outDiv">
            <div className="grayDiv" >
                <button className="button" onClick={()=>setContentM(true)} value="Content_module">Content_module</button>
                <button className="button" onClick={()=>setContentM(false)} value="Auth_module">Auth_module</button>
            </div>
            <div>
                <div className="inDiv">
                    <div className="grayDiv">
                    <button className="button" onClick={handleClick1} value="Module 1">Module 1</button>
                    <button className="button" onClick={handleClick2} value="Module 2">Module 2</button>
                    <button className="button" onClick={handleClick3} value="Module 3">Module 3</button>
                    <button className="button" onClick={handleClick4} value="Module 4">Module 4</button>
                    </div>
                    <div>
                    <h1>{`Numbers of users in ${selected}:`}</h1>
                        {contentM?
                        <div className="usersDiv">
                            {
                            moduleOne?
                            mockedData.map(e => 
                                e.content_module.authz_provider_1.map((e, index) =><div key={index} className="users">{e}</div>)
                                ) : null}
                            {
                            moduleTwo?
                            mockedData.map(e => 
                                e.content_module.authz_provider_2.map((e, index) =><div key={index} className="users">{e}</div>)
                                ) : null}
                            {
                            moduleThree?
                            mockedData.map(e => 
                                e.content_module.authz_provider_3.map((e, index) =><div key={index} className="users">{e}</div>)
                                ) : null}
                            {
                            moduleFour?
                            mockedData.map(e => 
                                e.content_module.authz_provider_4.map((e, index) =><div key={index} className="users">{e}</div>)
                                ) : null}
                        </div>
                        :
                        <div className="usersDiv">
                            {
                            moduleOne?
                            mockedData.map(e => 
                                e.auth_module.authn_provider_1.map((e, index) =><div key={index} className="users">{e}</div>)
                                ) : null}
                            {
                            moduleTwo?
                            mockedData.map(e => 
                                e.auth_module.authn_provider_2.map((e, index) =><div key={index} className="users">{e}</div>)
                                ) : null}
                            {
                            moduleThree?
                            mockedData.map(e => 
                                e.auth_module.authn_provider_3.map((e, index) =><div key={index} className="users">{e}</div>)
                                ) : null}
                            {
                            moduleFour?
                            mockedData.map(e => 
                                e.auth_module.authn_provider_4.map((e, index) =><div key={index} className="users">{e}</div>)
                                ) : null}
                        </div>
                        }

                    </div>
                    <div className="buttonDiv">
                        <DeleteButton/>
                        <AdviceButton/>
                        <CreateButton/>
                        <SubmitButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main

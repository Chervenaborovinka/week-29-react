import React, { useState } from "react";
import styles from "./Table.module.css";
import WordContext from "../WordContext/WordContext";

const Table = () => {

    const {words} = WordContext('http://itgirlschool.justmakeit.ru/api/words');

    return (
        <div className={styles.table}>
            <table className="table-rows">
                <tr>
                    <th>#</th>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th>Buttons</th>
                </tr>
                {words.map((word) => {

                    return <TableRow rowData={word} key={word.id} />;

                })}
            </table>
        </div>
    );

};

export default Table;

const TableRow = ({ rowData }) => {
    const { id, english, transcription, russian } = rowData;
    const [isSelected, setIsSelected] = useState(false);
    const [value, setValue] = useState({
        id,
        english,
        transcription,
        russian,
    });


    const [emptyFields,setEmptyFields] = useState({
        id: false,
        english: false,
        transcription:false,
        russian:false,
    }) 


    function handleClose() {
        setIsSelected(!isSelected);
        setValue({ ...rowData });
        setEmptyFields([]);
    }

    function handleSave() {
        if (value.english.match(/[а-яА-Я]/g)){
            setEmptyFields({...emptyFields, english:"Please, fill in english"});
        } else {
            setValue({ ...value });
            setIsSelected(!isSelected);
            setEmptyFields([]);
        }
    }

    function handleEdit() {
        setIsSelected(!isSelected);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setValue((prevValue) => {
            return { ...prevValue, [name]: value };
        });
        setEmptyFields({...emptyFields,
            [name]:
            value.trim()=== "" ? "Field is empty" : false,
        });
    }


    const btnDisabled = Object.values(emptyFields).some((elem)=>elem)

    return isSelected ? (
        <tr>
            <td>
                <td>{value.id}</td>
            </td>
            <td>
                <input
                    type="text"
                    value={value.english}
                    name={"english"}
                    onChange={handleChange}
                    className={emptyFields.english ? styles.border__error : ''}
                />
                <p>{emptyFields.english && emptyFields.english  }</p>
            </td>
            <td>
                <input
                    type="text"
                    value={value.transcription}
                    name={"transcription"}
                    onChange={handleChange}
                    className={emptyFields.transcription ? styles.border__error : ''}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={value.russian}
                    name={"russian"}
                    onChange={handleChange}  
                    className={emptyFields.russian ? styles.border__error : ''}
                />
            </td>
            <button disabled={btnDisabled} onClick={handleSave}>Save</button>
            <button onClick={handleClose}>Close</button>
        </tr>
    ) : (
        <tr>
            <td>{id}</td>
            <td>{value.english}</td>
            <td>{value.transcription}</td>
            <td>{value.russian}</td>
            <td>
                <td>
                    <button onClick={handleEdit}>Edit</button>
                    <button>Delete</button>
                </td>
            </td>
        </tr>
    );
};
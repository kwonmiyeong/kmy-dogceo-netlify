import '../css/DogInput.css';
import {useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function DogInput(props){

    const [dogType,setDogType]=useState('')

    const searchDog=async()=>{
        //alert("개 검색!")
        if (dogType === '' || dogType === 'select') {
            alert('select dog!')
            return
        }
        const result=await axios.get(`https://dog.ceo/api/breed/${dogType}/images/random`)
        console.log(result)
        console.log(result.data.message)
        const imgSrc = result.data.message
        props.setDogImg(imgSrc)
        props.setDogType(dogType)
    }

    const dogSelect = () => {
        return (
            <select id='dog-select' onChange={dogSelectChange}>
                    <option value='select'>select</option>
                    <option value='affenpinscher'>Affenpinscher</option>
                    <option value='african'>African</option>
                    <option value='airedale'>Airedale</option>
                    <option value='akita'>Akita</option>
                    <option value='australian'>Shepherd Australian</option>
                    <option value='basenji'>Basenji</option>
                    <option value='beagle'>Beagle</option>
                    <option value='bluetick'>Bluetick</option>
                    <option value='borzoi'>Borzoi</option>
                    <option value='bouvier'>Bouvier</option>
                    <option value='boxer'>Boxer</option>
                    <option value='brabancon'>Brabancon</option>
                    <option value='briard'>Briard</option>
                    <option value='chihuahua'>Chihuahua</option>
                    <option value='chow'>Chow</option>
                    <option value='clumber'>Clumber</option>
            </select>
        )
    }

    const dogSelectChange = (e) => {
        console.log(e.target.value)
        const dogType = e.target.value
        setDogType(dogType)
    }

    return(
        <div id='dog-input'>
            <div id='select-wrap'>
                {dogSelect()}
            </div>
            <button onClick={searchDog}>
                <FontAwesomeIcon icon={faMagnifyingGlass}
                fontSize="24px"/>
            </button>
        </div>
    )
}

export default DogInput;
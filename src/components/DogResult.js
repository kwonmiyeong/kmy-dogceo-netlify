import '../css/DogResult.css';

function DogResult(props){
    return(
        <div id='dog-result'>
            <div id='img-wrap'>
                {
                    props.dogImg === '' ?
                        '' : <h1>{props.dogType} image</h1>
                }
                {
                    props.dogImg === '' ?
                        '' : <img src={props.dogImg} alt='이미지' />
                }
            </div>
        </div>
    )
}

export default DogResult;
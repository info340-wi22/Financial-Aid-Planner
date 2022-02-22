import React, {useState} from "react";

 function UserInput(props) {
	const [amount, setAmount] = useState("");
	const handleInputAmount = (event) => {
		setAmount(event.target.value);
	}
	const [cover, setCover] = useState("");
	const handleInputCover = (event) => {
		setCover(event.target.value);
	}
	 const handleSubmit = (event) => {
		 props.onSubmit(amount, cover, "currentAid", "potentialAid", "amountLeft");

	 }

	 const leftOver = amount - cover;
	
	 return(
			<div className="info">
            <button type="button" id="arrow-button-l" className="arrow-button"><span className="arrow left"></span>Page 1</button>

            <div className="text" role="status">
                <form>
                    <label htmlFor="cost">Cost of College Per Year:</label>
                    <input type="text" id="cost" name="cost" value={amount} onChange={handleInputAmount}/> 
                </form>
                <form>
                    <label htmlFor="cover">Amount You Can Cover:</label>
                    <input type="text" id="cover" name="cover"  value={cover} onChange={handleInputCover}/> 
                </form>
                <p>Current Aid: 9000</p>
                <p>Potential Aid: 23000</p>
                <p>Amount Left: {leftOver}</p>
            </div>
            <div className="buttons">
                <button type="submit" id="card-button" onClick={handleSubmit}><span>Add Card</span></button>
                <button type="submit" id="template-button" onClick={handleSubmit}>Upload As Template</button>
            </div>
            <button type="button" id="arrow-button-r" className="arrow-button">Page 3<span className="arrow right"></span></button>
        </div>
	 );
}
export default UserInput;

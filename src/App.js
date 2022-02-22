import NavBar from './NavBar';
import UserInput from './UserInput'

function App() {
    const addPost = (costPerYear, amountCover, currentAid, potentialAid, amountLeft) => {
        const newPost = {
            yearlyCost: costPerYear, 
            userCover: amountCover,
            userAid: currentAid,
            userPotential: potentialAid,
            userAmountNeed: amountLeft
        }
        console.log(newPost);
    }
	return (
        <div className='container'>
            <NavBar />
            <main>
        <UserInput onSumbit={addPost} />
	</main>
        </div>
	);
}

export default App;


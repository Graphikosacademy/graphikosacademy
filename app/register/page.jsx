import "./register.css"

const page = () => {
  return (
    <div className='register-container'>
        <div className='register-form'>
            <h1>Sign In / Register</h1>
            <form >
                <label htmlFor="Name"> Your Name</label>
                <input Id="Name"/>
                <label htmlFor="Name">Your Phone Number</label>
                <input Id="Name"/>
                <label htmlFor="Name">Your Email</label>
                <input Id="Name"/>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default page
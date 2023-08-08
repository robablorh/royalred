import React from 'react'

const Quoteform = () => {
  return (
    <div>
        <form>
            <label>Location</label> &nbsp;
            <input type='text' name='location'/><br/>
            <label>Purpose</label><br/>
            <input type="checkbox"  name="property registration" />&nbsp;
            <label for="lareg">Property Registration</label><br/>
            <input type="checkbox"  name="Propertyvaluation" />&nbsp;
            <label for="laval">Propery Valuation</label><br/>
            <input type="checkbox" name="landscaping"/>&nbsp;
            <label for="javascript">Landscaping</label><br/>
            <label for="date">Date</label>&nbsp;
            <input type="date" name="date"/><br/>
            <label>Inspection fee</label>&nbsp;
             <button>Pay here</button>

        </form>
    </div>
  )
}

export default Quoteform

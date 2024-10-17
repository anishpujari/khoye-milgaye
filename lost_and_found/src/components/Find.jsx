import React from "react";

function FindForm(){
    return(
        <div className="report">
            <h1>Report</h1>

            <form>
                
                {/*Item category input*/}
                <label for="category">Category</label>
                <input type="text" id="category" name="category"></input>
                
                {/* Brand selection drop down*/}
                <label for="brand"> Brand</label>
                <select id="brand" name="brand">
                    <option value="brand1">brand 1</option>
                    <option value="brand2">brand 2</option>
                    <option value="brand3">brand 3</option>
                    <option value="brand4">brand 4</option>
                </select>

                {/*Image input*/}
                <label for="itemImage">Image of item (optional)</label>
                <input type="text" id="itemImage" name="itemImage"></input>
                
                {/*Location input*/}
                <label for="found">Location left at</label>
                <input type="text" id="found" name="found"></input>

                {/* Color of item */}
                <label for="color">Color of item</label>
                <input type="text" id="color" name="color"></input>

                {/* Extra description */}
                <label for="desc"></label>
                <textarea id="desc" name="desc" rows={"4"} cols={"51"}></textarea>

                {/* Submit Button */}
                <button type="button">Find</button>
            </form>
        
        </div>
        )
}

export default FindForm;
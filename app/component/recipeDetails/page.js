import React from 'react'

const RecipeDetails = () => {
    return (
        <div className='flex flex-row justify-center pt-25 h-screen w-full bg-black text-white' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/ingredients-near-pizza_23-2147772081.jpg?semt=ais_hybrid&w=1080)', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='flex flex-col gap-1 px-2 ml-18 w-[57%] h-[98%]'>
                <h1 className='self-start text-3xl font-semibold'>Herb-Crusted Lemon Chicken Bake</h1>
                <p className='text-base'>Juicy chicken breasts baked with a zesty lemon herb crust, perfect for a flavorful weeknight dinner.</p>
                <div className='flex flex-col justify-between px-20 w-full gap-10 overflow-y-auto [&::-webkit-scrollbar]:w-4 [&::-webkit-scrollbar-track]:bg-neutral-900 [&::-webkit-scrollbar-thumb]:bg-transparent [&::-webkit-scrollbar-thumb]:border [&::-webkit-scrollbar-thumb]:rounded-2xl [&::-webkit-scrollbar-thumb]:border-neutral-700'>

                    <div className='flex flex-row w-full h-full justify-between'>
                        <div className='flex flex-col gap-3 h-full w-[40%] '>
                            <h1 className='px-18 border-b-2 self-center border-yellow-300 text-3xl'>Ingredients</h1>
                            <ol className='flex flex-col ml-8 justify-start items-start gap-3 list-disc'>
                                <li className='text-lg w-full'>Lorem ipsum dolor sit.
                                    <div className='mt-2 border-b-2 border-dashed border-white'></div>
                                </li><li className='text-lg w-full'>Lorem ipsum dolor sit.
                                    <div className='mt-2 border-b-2 border-dashed border-white'></div>
                                </li><li className='text-lg w-full'>Lorem ipsum dolor sit.
                                    <div className='mt-2 border-b-2 border-dashed border-white'></div>
                                </li><li className='text-lg w-full'>Lorem ipsum dolor sit.
                                    <div className='mt-2 border-b-2 border-dashed border-white'></div>
                                </li>

                            </ol>
                        </div>
                        <div className='flex flex-col gap-3 h-full w-[40%] '>
                            <h1 className='px-18 border-b-2 self-center border-yellow-300 text-3xl'>Instructions</h1>
                            <ol className='flex flex-col ml-8 justify-start items-start gap-3 list-decimal'>
                                <li className='text-lg w-full'>Lorem ipsum dolor sit.
                                    <div className='mt-1'></div>
                                </li>
                                <li className='text-lg w-full'>Lorem ipsum dolor sit.
                                    <div className='mt-1'></div>
                                </li>
                                <li className='text-lg w-full'>Lorem ipsum dolor sit.
                                    <div className='mt-1'></div>
                                </li>
                                <li className='text-lg w-full'>Lorem ipsum dolor sit.
                                    <div className='mt-1'></div>
                                </li>

                            </ol>
                        </div>

                    </div>
                    <div className='flex flex-col my-8 justify-center items-center  w-full '>
                        <img className='w-[80%]' src='https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg' alt='Preview Image' />
                        <h1 className='px-18 self-center border-yellow-300 text-3xl'>Recipe Name</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RecipeDetails
import React from 'react'

function Profile() {
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 pb-24 pt-6 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto">
                    <div class="flex flex-col sm:flex-row mt-10">
                        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div class="flex flex-col items-center text-center justify-center">
                                <h2 class="font-medium title-font mt-4 text-white text-lg">Phoebe Caulfield</h2>
                                <div class="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                                <p class="text-base text-gray-400">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                            </div>
                        </div>
                        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            {/* <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag.</p> */}
                            <div class="xl:w-full md:w-1/2 p-2">
                                <div class="border border-gray-700 border-opacity-75 p-5 rounded-lg">
                                    <h2 class="text-lg text-white font-medium title-font mb-2">Neptune</h2>
                                    <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                                </div>
                            </div>
                            <div class="xl:w-full md:w-1/2 p-2">
                                <div class="border border-gray-700 border-opacity-75 p-5 rounded-lg">
                                    <h2 class="text-lg text-white font-medium title-font mb-2">Neptune</h2>
                                    <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile

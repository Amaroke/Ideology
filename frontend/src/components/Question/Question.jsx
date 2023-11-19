import React from "react";

const Question = () => {
    return (
        <div class="flex items-center justify-center">
            <div class="relative flex w-auto mx-48 mt-5 flex-row rounded-xl bg-gray-900 bg-clip-border text-white shadow-md">
                <div class="p-6">
                    <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h4>
                    <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased text-center mx-20">
                        Vivamus at commodo neque, ut posuere purus. Vivamus nec lorem convallis, scelerisque eros vitae, tempor erat. Cras viverra nec enim ac mattis. In viverra varius lectus, eget iaculis ante auctor sed. Curabitur pharetra lacus a dolor fermentum condimentum. Nullam eu ex euismod, sodales felis et, auctor magna.
                    </p>
                    <div className="flex justify-center items-center">
                        <p>Agree</p>
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <button
                                key={index}
                                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                {index}
                            </button>
                        ))}
                        <p>Disagree</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question;
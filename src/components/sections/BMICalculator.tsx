"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

type BMIResult = {
  bmi: number;
  category: string;
  color: string;
  calories: number;
  bodyFat: number;
  suggestedPlan: string;
};

function getBMIResult(
  height: number,
  weight: number,
  age: number,
  gender: "male" | "female"
): BMIResult {
  const h = height / 100;
  const bmi = parseFloat((weight / (h * h)).toFixed(1));

  let category = "";
  let color = "";
  let suggestedPlan = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "#0A7A4E";
    suggestedPlan = "Muscle Building — Annual Plan";
  } else if (bmi < 25) {
    category = "Normal Weight";
    color = "#96690A";
    suggestedPlan = "Maintenance + Strength — Quarterly";
  } else if (bmi < 30) {
    category = "Overweight";
    color = "#B8630A";
    suggestedPlan = "Weight Loss Program — Half Yearly";
  } else {
    category = "Obese";
    color = "#B91C1C";
    suggestedPlan = "Fat Loss + Cardio — Annual Plan";
  }

  const bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

  const calories = Math.round(bmr * 1.55);

  const bodyFat = parseFloat(
    (gender === "male"
      ? 1.2 * bmi + 0.23 * age - 16.2
      : 1.2 * bmi + 0.23 * age - 5.4
    ).toFixed(1)
  );

  return { bmi, category, color, calories, bodyFat, suggestedPlan };
}

export function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [result, setResult] = useState<BMIResult | null>(null);

  const handleCalculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);
    if (!h || !w || !a || h < 100 || h > 250 || w < 30 || w > 300) return;
    setResult(getBMIResult(h, w, a, gender));
  };

  const inputClass =
    "w-full bg-[#CAC6B9] border border-[#A29D8F] text-[#1C1914] rounded-xl px-4 py-3.5 text-sm font-body focus:outline-none focus:border-[rgba(150,105,10,0.5)] focus:shadow-[0_0_0_2px_rgba(150,105,10,0.12)] transition-all duration-300 placeholder-[#8C8776]";

  return (
    <section id="bmi" className="section-padding bg-[#B7B3A7] relative overflow-hidden">
      <div
        className="absolute inset-0 cinema-grid opacity-30"
        style={{ backgroundSize: "60px 60px" }}
      />

      <div className="container-wide relative">
        <SectionTitle
          label="Health Check"
          title="Calculate Your"
          highlight="BMI"
          subtitle="Find out your body mass index and get a personalized membership recommendation."
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Input Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#CAC6B9] border border-[#A29D8F] rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[rgba(150,105,10,0.12)] flex items-center justify-center">
                  <Calculator size={18} className="text-[#96690A]" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[#1C1914] text-base">BMI Calculator</h3>
                  <p className="text-[#8C8776] text-xs font-body">Fill in your details</p>
                </div>
              </div>

              {/* Gender Toggle */}
              <div className="flex gap-2 mb-5">
                {(["male", "female"] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all duration-300 cursor-pointer border-none ${
                      gender === g
                        ? "bg-[#D4AF37] text-[#0A0A0A]"
                        : "bg-[#D3CFC2] text-[#6B6658] hover:text-[#1C1914]"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>

              <div className="space-y-3 mb-5">
                <div>
                  <label className="text-[#6B6658] text-xs font-sans mb-1.5 block uppercase tracking-wider">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    className={inputClass}
                    min="100"
                    max="250"
                  />
                </div>

                <div>
                  <label className="text-[#6B6658] text-xs font-sans mb-1.5 block uppercase tracking-wider">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 72"
                    className={inputClass}
                    min="30"
                    max="300"
                  />
                </div>

                <div>
                  <label className="text-[#6B6658] text-xs font-sans mb-1.5 block uppercase tracking-wider">
                    Age (years)
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g. 28"
                    className={inputClass}
                    min="10"
                    max="100"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCalculate}
                className="w-full bg-[#D4AF37] text-[#0A0A0A] font-black text-sm tracking-[0.15em] uppercase py-4 rounded-xl transition-all duration-300 hover:bg-[#E8CC5F] cursor-pointer border-none shadow-[0_0_30px_rgba(212,175,55,0.2)] min-h-[52px]"
              >
                <span className="flex items-center justify-center gap-2">
                  Calculate BMI
                  <ChevronRight size={16} />
                </span>
              </motion.button>
            </motion.div>

            {/* Result Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-[#CAC6B9] border border-[#A29D8F] rounded-2xl p-7 flex flex-col"
            >
              <AnimatePresence mode="wait">
                {!result ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full border border-[#A29D8F] flex items-center justify-center mb-4">
                      <span className="text-4xl font-display font-black text-[#A29D8F]">?</span>
                    </div>
                    <p className="text-[#8C8776] text-sm font-body">
                      Fill in your details to see your BMI result and personalized recommendation
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col gap-5"
                  >
                    {/* BMI score */}
                    <div className="text-center py-4">
                      <div className="text-[#6B6658] text-xs uppercase tracking-widest mb-2 font-sans">
                        Your BMI
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="font-display font-black text-7xl"
                        style={{ color: result.color }}
                      >
                        {result.bmi}
                      </motion.div>
                      <div
                        className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mt-2"
                        style={{
                          background: `${result.color}18`,
                          color: result.color,
                          border: `1px solid ${result.color}30`,
                        }}
                      >
                        {result.category}
                      </div>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Daily Calories", value: `${result.calories} kcal`, color: "#96690A" },
                        { label: "Body Fat Est.", value: `${result.bodyFat}%`, color: "#0A7A4E" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="bg-[#C4C0B4] rounded-xl p-4 border border-[#A29D8F] text-center"
                        >
                          <div
                            className="font-display font-black text-xl mb-1"
                            style={{ color: stat.color }}
                          >
                            {stat.value}
                          </div>
                          <div className="text-[#8C8776] text-xs font-body">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Recommended plan */}
                    <div className="bg-[rgba(150,105,10,0.08)] border border-[rgba(150,105,10,0.25)] rounded-xl p-4">
                      <div className="text-[#96690A] text-[10px] uppercase tracking-widest mb-1.5 font-sans">
                        Recommended for you
                      </div>
                      <div className="font-sans font-bold text-[#1C1914] text-sm">
                        {result.suggestedPlan}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        onClick={() => {
                          document.querySelector("#membership")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="mt-3 w-full border border-[rgba(150,105,10,0.35)] text-[#96690A] text-xs font-semibold py-2.5 rounded-lg hover:bg-[rgba(150,105,10,0.1)] transition-all duration-300 cursor-pointer bg-transparent"
                      >
                        View Plans →
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

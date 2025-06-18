import AchievementCounter from "./AchievementCounter";

const achievements = [
  { icon: "🏆", title: "VISA SUCCESS STORY", target: 14000, speed: 15 },
  { icon: "🎓", title: "STUDENT VISA", target: 8000, speed: 10 },
  { icon: "💍", title: "SPOUSE VISA", target: 3000, speed: 7 },
  { icon: "🧳", title: "VISITOR VISA", target: 2500, speed: 4 },
  { icon: "🏫", title: "DIRECT COLLEGE", target: 150, speed: 2 },
  { icon: "🥇", title: "YEARS EXPERIENCE", target: 7, speed: 1 },
];

export default function AchievementSection() {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our Achievements</h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          OIC Global best Visa Consultant in Chandigarh - North India,
          Specializes in facilitating admissions to global colleges. With More
          than 7+ years of experience.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-7xl mx-40">
        {achievements.map((item, idx) => (
          <AchievementCounter key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

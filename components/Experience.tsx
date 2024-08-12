import { useAnimation, useInView, motion, Variant } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import Image from "next/image";

export const ExperienceCard = ({
  title,
  date,
  skills,
  desc,
  img,
  premise,
  onClick,
}: {
  title: string;
  date?: string;
  skills?: string[];
  desc: string;
  img?: string;
  premise: string;
  onClick?: (val: string) => void;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
    whileHover={{
      scale: 1.05,
      rotate: [0, -2, 2, -1, 1, 0], // Wobble effect with rotation
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
      <Link
        style={{
          width: "100%",
          height: "100%",
          // zIndex: 10,
        }}
        href={"#"}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            background: "",
            backgroundColor: isHovered ? "#1f2833" : "transparent",
            margin: 10,
            padding: 10,
            borderRadius: "10px",
            color: "#8d96a0",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            if (onClick) {
              onClick(title);
            }
          }}
        >
          <div
            style={{
              flex: 3,
            }}
          >
            {img ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={img}
                  alt={"Mohamed Minsaf"}
                  width={100}
                  height={100}
                />
              </div>
            ) : (
              <span
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2"
                style={{
                  color: isHovered ? "#66fcf1" : "#8d96a0",
                }}
              >
                {date}
              </span>
            )}
          </div>
          <div
            style={{
              flex: 6,
            }}
          >
            <h6
              className="font-bol"
              style={{
                color: isHovered ? "#66fcf1" : "white",
              }}
            >
              {title}
            </h6>
            <p className="text-xs">{premise}</p>
            <p className="mt-2 text-xs leading-normal">{desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills &&
                skills.map((skill) => (
                  <span
                    key={skill}
                    className=" rounded-full px-3 py-1 text-xs"
                    style={{
                      background: "rgba(69, 162, 158,0.5)",
                      color: isHovered ? "#66fcf1" : "white",
                    }}
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

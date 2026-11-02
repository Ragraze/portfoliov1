import expressJsCertificate from "../../public/certificates/expressjs.webp";
import msibCertificate from "../../public/certificates/msib.webp";
import type { Translations } from "@/data/translations";

export const certificateAssets: {
	id: keyof Translations["certificates"]["items"];
	image: string;
}[] = [
	{
		id: "21",
		image: "/certificates/maganghub-tri-wall-indonesia.webp",
	},
	{
		id: "25",
		image: "/certificates/internship-tri-wall-indonesia.webp",
	},
	{
		id: "22",
		image: "/certificates/bangkit-academy.webp",
	},
	{
		id: "23",
		image: "/certificates/teaching-assistant.webp",
	},
	{
		id: "26",
		image: msibCertificate.src,
	},
	{
		id: "2",
		image: "/certificates/google-cloud.webp",
	},
	{
		id: "8",
		image: "/certificates/web-programming.webp",
	},
	{
		id: "9",
		image: "/certificates/javascript.webp",
	},
	{
		id: "10",
		image: "/certificates/git.webp",
	},
	{
		id: "11",
		image: "/certificates/data-science.webp",
	},
	{
		id: "12",
		image: "/certificates/python.webp",
	},
	{
		id: "13",
		image: "/certificates/sql.webp",
	},
	{
		id: "17",
		image: "/certificates/back-end.webp",
	},
	{
		id: "18",
		image: "/certificates/front-end.webp",
	},
	{
		id: "19",
		image: "/certificates/java.webp",
	},
	{
		id: "20",
		image: "/certificates/machine-learning.webp",
	},
	{
		id: "1",
		image: "/certificates/it-support.webp",
	},
	{
		id: "3",
		image: "/certificates/cybersecurity.webp",
	},
	{
		id: "4",
		image: "/certificates/ccna-itn.webp",
	},
	{
		id: "5",
		image: "/certificates/alibaba.webp",
	},
	{
		id: "6",
		image: "/certificates/mongodb.webp",
	},
	{
		id: "7",
		image: "/certificates/reactjs.webp",
	},
	{
		id: "16",
		image: expressJsCertificate.src,
	},
	{
		id: "14",
		image: "/certificates/office.webp",
	},
	{
		id: "15",
		image: "/certificates/toefl.webp",
	},
	{
		id: "27",
		image: "/certificates/pkm-rsh2-maba.webp",
	},
	{
		id: "24",
		image: "/certificates/accreditation.webp",
	},
];

const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

// Use .filter to create an array of user objects with at least 3 languages
const usersWithThreeLanguages = users.filter(user => user.languages.length >= 3);

console.log(usersWithThreeLanguages);

// Use .map to create an array of strings where each element is a user's email address
const userEmails = users.map(user => user.email);

console.log(userEmails);

// Use .reduce to get the total years of experience
const totalYearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);

console.log(totalYearsOfExperience);

// Calculate the average years of experience
const averageYearsOfExperience = totalYearsOfExperience / users.length;

console.log(averageYearsOfExperience);

// Use .reduce to get the longest email
const longestEmail = users.reduce((longest, user) => user.email.length > longest.length ? user.email : longest, '');

console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string
const userListString = users.reduce((listString, user, index, array) => {
	listString += user.name;
	if (index < array.length - 1) {
		listString += ', ';
	}
	return listString;
}, 'Your instructors are: ');

console.log(userListString);

// Bonus: Use .reduce to get the unique list of languages
const uniqueLanguages = users.reduce((languages, user) => {
	user.languages.forEach(language => {
		if (!languages.includes(language)) {
			languages.push(language);
		}
	});
	return languages;
}, []);

console.log(uniqueLanguages);

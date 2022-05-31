module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {

    fontFamily: {
        sans: [ 
        "Graphik", 
        "Helvetica Neue", 
        "helvetica", 
        "Apple Color Emoji", 
        "arial", 
        "sans-serif"]
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

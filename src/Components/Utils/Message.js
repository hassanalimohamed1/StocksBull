export default function message (message) {
    if (message === 403) {
        return "Forbidden (ran out of API KEYS)"
    } else if (message === 429) {
        return "Too Many Requests"
    } else {
        return "Internal Server Error"
    }
} 
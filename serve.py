from http.server import HTTPServer, SimpleHTTPRequestHandler
import socket

HOST = "0.0.0.0"
PORT = 8000


def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

    try:
        s.connect(("8.8.8.8", 80))
        return s.getsockname()[0]

    except Exception:
        return "127.0.0.1"

    finally:
        s.close()


local_ip = get_local_ip()

server = HTTPServer((HOST, PORT), SimpleHTTPRequestHandler)

print(f"School Finder is running on your computer at:")
print(f"  http://localhost:{PORT}")

print(f"\nOpen this on your phone:")
print(f"  http://{local_ip}:{PORT}")

print("\nPress Ctrl+C to stop the server.")

try:
    server.serve_forever()

except KeyboardInterrupt:
    print("\nServer stopped.")
    server.server_close()
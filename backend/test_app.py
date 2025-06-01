import unittest
from app import app

class BasicTestCase(unittest.TestCase):
    def test_home(self):
        tester = app.test_client(self)
        response = tester.get('/api')
        self.assertEqual(response.status_code, 200)

    def test_status(self):
        with app.test_client() as client:
            response = client.get("/api/status")
            self.assertEqual(response.status_code, 200)
            self.assertEqual(response.get_json(), {"status": "All systems operational."})

if __name__ == '__main__':
    unittest.main()

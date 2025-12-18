<template>
  <div class="page-root">
    <div>

      <header class="page-hero">
        <h1>Contact Us</h1>
      </header>

      <main class="section-wrap">

        <div class="row g-4 mb-4">

          <div class="col-lg-6">
            <div class="glass-card glass-card-strong h-100">
              <img src="/img/home/poster.png" alt="">
            </div>
          </div>

          <div class="col-lg-6">
            <div class="glass-card h-100 d-flex flex-column gap-3">

              <div class="d-flex align-items-start gap-3">
                <div class="small-icon"><i class="bi bi-telephone-fill"></i></div>
                <div>
                  <h3 class="section-title">Get in Touch</h3>
                  <p class="muted">
                    Have questions about bookings, pricing or vehicles?
                    Reach out to our support team — we respond quickly.
                  </p>
                </div>
              </div>

              <div class="mt-2">
                <p class="mb-1"><strong>Phone</strong></p>
                <p class="muted mb-2">+91 98765 43210</p>

                <p class="mb-1"><strong>Email</strong></p>
                <p class="muted mb-2">support@skylarkcars.com</p>

                <p class="mb-1"><strong>Address</strong></p>
                <p class="muted">Skylark Rent-A-Car, Calicut, Kerala — 673001</p>
              </div>

              <small class="muted mt-auto">Support hours: Mon–Sun 7:00 — 23:00</small>
            </div>
          </div>



        </div>


        <div class="row g-4 mb-4">

          <div class="col-lg-6">
            <div class="glass-card h-100">

              <h3 class="section-title">Report an Issue</h3>

              <p class="muted">
                If you experienced a problem during booking or rental,
                describe it below. Provide booking ID if available.
              </p>

              <form @submit.prevent="submitIssue">

                <div class="row g-3">

                  <div class="col-12">
                    <label class="form-label">Full name</label>
                    <input v-model="issue.name" type="text" class="form-control" placeholder="Full name" required>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Email</label>
                    <input v-model="issue.email" type="email" class="form-control" placeholder="skylark@gmail.com"
                      required>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Phone</label>
                    <input v-model="issue.phone" type="tel" class="form-control" placeholder="1234567890" required>
                  </div>

                  <div class="col-12">
                    <label class="form-label">Issue Type</label>
                    <input v-model="issue.issueType" type="text" class="form-control" placeholder="wad2334">
                  </div>

                  <div class="col-12">
                    <label class="form-label">Describe the issue</label>
                    <textarea v-model="issue.description" rows="5" class="form-control"
                      placeholder="What happened ? Provide details...." required></textarea>
                  </div>

                  <div class="col-12">
                    <button type="submit" class="btn submit-issue-btn">
                      Submit Issue
                    </button>

                  </div>

                </div>

              </form>

            </div>
          </div>


          <div class="col-lg-6">
            <div class="report-box">
              <div class="overlay"></div>

              <div class="report-inner">
                <div>
                  <h2>Report Issue</h2>
                  <p>Quick resolution guaranteed — our team will reach out within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="map-wrap mt-4">
          <div class="container">
            <div class="glass-card p-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7824.353051369362!2d75.9895673905588!3d11.321804705448022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba641801beef9e9%3A0xb2830e78854a4e17!2sMukkam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1749458231122!5m2!1sen!2sin"
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>

      </main>

    </div>
  </div>
</template>



<script>
import api from '@/services/api';
export default {
  name: "ContactPage",

  data() {
    return {
      contact: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      issue: {
        name: this.$store.state.user.name,
        email: this.$store.state.user.mail,
        phone: this.$store.state.user.phone,
        issueType: "",
        description: "",
      },
    };
  },

  methods: {
    async submitIssue() {
      try {
        await api.post('/add-issue', this.issue)
        this.issue.bookingId = ""
        this.issue.description = ""

      } catch (err) {
        console.error("Failed to submit issue ", err)
      }
    }
  },
};
</script>



<style scoped>
.page-root {
  --skylark-blue: #0a57a9;
  --glass-bg: rgba(255, 255, 255, 0.14);
  --glass-strong: rgba(255, 255, 255, 0.55);

  margin: 0;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(180deg, #8fc7ff22, #0a57a9 70%);
  color: #04223a;
}



.page-hero {
  height: 48vh;
  background: url('/img/home/contact.jpg') center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.2));
}

.page-hero h1 {
  position: relative;
  z-index: 2;
  color: #a9a5a5bc;
  font-size: 2.8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
  letter-spacing: 2px;
}

.section-wrap {
  max-width: 1100px;
  margin: auto;
  padding: 28px;
}

.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 22px;
  box-shadow: 0 10px 30px rgba(6, 30, 60, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.12);
  height: 100%;
}

.glass-card img {
  width: 100%;
}

.glass-card-strong {
  background: var(--glass-strong);
  color: #07243f;
}

.small-icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: rgba(10, 87, 169, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--skylark-blue);
  font-size: 1.25rem;
}

.section-title {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: 700;
  color: #052a4a;
}

.muted {
  color: #6b7d8f;
}

.report-box {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  min-height: 180px;
  background: url('/img/home/issue.jpg') center/cover no-repeat;
  box-shadow: 0 10px 30px rgba(6, 30, 60, 0.12);
}

.report-box .overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
      rgba(0, 87, 169, 0.55),
      rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
}

.report-inner {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 28px;
  color: #fff;
}

.report-inner h2 {
  font-weight: 700;
  margin-bottom: 8px;
}

.report-inner p {
  color: #e8f6ff;
  margin: 0;
}

.form-label {
  font-weight: 600;
  color: #0a3d62;
}

.form-control {
  border-radius: 10px;
}

.submit-btn {
  background-color: var(--skylark-blue);
  border: none;
  color: #fff;
  width: 100%;
  padding: 10px 16px;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0b3c71;
  color: #fff;
}

.submit-issue-btn {
  background-color: rgba(0, 0, 0, 0.87);
  border: none;
  color: #fff;
  width: 100%;
  padding: 10px 16px;
  transition: background-color 0.3s ease;
}

.submit-issue-btn:hover {
  background-color: #084a91;
  color: #fff;
}



.map-wrap iframe {
  width: 100%;
  height: 420px;
  border-radius: 12px;
  border: 0;
}


@media (max-width: 991px) {
  .page-hero {
    height: 34vh;
  }

  .page-hero h1 {
    font-size: 2rem;
  }

  .section-wrap {
    margin-top: -40px;
    padding: 18px;
  }

  .map-wrap iframe {
    height: 300px;
  }
}

@media (max-width: 576px) {
  .section-wrap {
    margin-top: -30px;
    padding: 14px;
  }

  .report-box {
    min-height: 150px;
  }
}
</style>

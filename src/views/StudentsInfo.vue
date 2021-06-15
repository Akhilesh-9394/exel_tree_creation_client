<template>
  <div>
    <student-header :isuploaded="datauploaded" :count="count" />
    <student-list :items="studentData" v-if="datauploaded" />
    <div class="container p-5" v-if="!datauploaded">
      <h1 class="text-muted">No Students Uploaded Yet</h1>
      <p>
        <a
          class="text-decoration-none"
          href="http://localhost:3000/assets/students_template.xlsx"
          download="students.xlsx"
          ><b-icon icon="cloud-download"></b-icon> Download</a
        >
        the template and
        <b-icon icon="cloud-upload" variant="primary"></b-icon> Upload students.
      </p>
      <b-button variant="primary" @click="modalShow = !modalShow"
        ><b-icon icon="cloud-upload" font-scale="0.9"></b-icon> Upload</b-button
      >

      <b-modal
        v-model="modalShow"
        size="lg"
        title="Upload a File"
        hide-header-close
        centered
      >
        <VueFileAgent
          :theme="'grid'"
          :multiple="false"
          :deletable="true"
          :accept="'.xlsx'"
          :maxSize="'10MB'"
          :helpText="'Choose Excel files to upload'"
          :errorText="{
            type: 'Invalid file type. Only images or zip Allowed',
            size: 'Files should not exceed 10MB in size',
          }"
          @select="handleChange($event)"
        ></VueFileAgent>
        <button
          :disabled="!filename"
          @click="uploadFile(filename)"
          class="btn btn-outline-primary mt-2"
        >
          Upload
        </button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import StudentHeader from "../components/StudentHeader.vue";
import StudentList from "../components/StudentList.vue";
import axios from "axios";
export default {
  components: {
    StudentHeader,
    StudentList,
  },
  data() {
    return {
      modalShow: false,
      filename: "",
      datauploaded: false,
      studentData: [],
    };
  },
  methods: {
    handleChange(e) {
      // this.filename = this.$refs.file.files[0];
      // console.log(this.filename);
      this.filename = e[0].file;
    },
    uploadFile(file) {
      let filedata = new FormData();
      filedata.append("file", file);
      axios
        .post("http://localhost:3000/upload", filedata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            this.$toasted.success("File Uploaded Successfully.");
            this.getStudents();
          }
        })
        .catch((err) => {
          if (err.response) {
            this.getStudents();
            this.$toasted.error(`${err.response.data.message}`);
          }
        });
    },
    getStudents() {
      axios.get("http://localhost:3000/getstudents").then((res) => {
        if (res.status == 200) {
          this.studentData = res.data;
          this.datauploaded = true;
          this.$toasted.success("Students Fetched Successfully.");
          setTimeout(() => {
            this.$toasted.info(
              "You can also update student images from options."
            );
          }, 3000);
        }
      });
    },
  },

  computed: {
    count() {
      return this.studentData.length;
    },
  },
};
</script>

<style scoped>
</style>